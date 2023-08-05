import Checkout from "./Checkout";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import Swal from "sweetalert2";

import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../../firebaseConf";

const CheckoutContainer = () => {
  const { cart, getTotalPrice, clearCart } = useContext(CartContext);
  const [orderId, setOrderId] = useState("");

  let total = getTotalPrice();

  const { handleSubmit, handleChange, errors } = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    onSubmit: (data) => {
      let order = {
        buyer: data,
        items: cart,
        total,
        date: serverTimestamp(),
      };
      let ordersCollections = collection(db, "orders");
      addDoc(ordersCollections, order).then((res) => setOrderId(res.id));

      cart.forEach((elemento) => {
        updateDoc(doc(db, "products", elemento.id), {
          stock: elemento.stock - elemento.quantity,
        });
      });
      clearCart();
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Orden realizada con éxito",
        showConfirmButton: false,
        timer: 1500,
      });
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Este campo es requerido")
        .min(8, "Debe tener al menos 8 caracteres")
        .max(16, "Debe tener como maximo 16 caracteres"),
      email: Yup.string()
        .email("Ingrese un e-mail valido")
        .required("Este campo es requerido"),
      password: Yup.string()
        .required("Este campo es requerido")
        .matches(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z]).{8,16}$/, {
          message:
            "Debe contener: una mayúscula, una minuscula, un numero y entre 8 y 16 caracteres",
        }),
    }),
    validateOnChange: false,
  });

  return <Checkout data={{ handleSubmit, handleChange, errors, orderId }} />;
};

export default CheckoutContainer;
