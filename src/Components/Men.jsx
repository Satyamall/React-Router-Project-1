
import style from "./Style.module.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Card/Card";

export default function Men(){

    const [data,setData]=useState([]);

    const getData=()=>{
        return axios.get("http://localhost:3000/products")
    }

    useEffect(()=>{
        getData()
        .then((res)=>{
            setData(res.data[0].men);
        })
        .catch((err)=>{

        })
    },[])

    const handleCart=({id,name,image,price})=>{

    }
    return (
        <div>
            <div className={style.box4}>
                <h1>Earth-First Men's Apparel</h1>
                <p>Essentials for the things you do every day, made with the most <br /> sustainable (and comfortable) materials in the world.</p>
                <div className={style.text}>
                    <Link to="/men" className={style.btn}>SHOP MEN'S</Link>
                </div>
            </div>
            <div style={{textAlign: "center",margin: 40}}>
                <h1 style={{textDecoration: "underline"}}>Men's Clothes</h1>
            </div>
            <div className={style.cardBox}>
               {
                   data.map((item)=>{
                       return <Card 
                          key={item.id}
                          id={item.id}
                          name={item.name}
                          price={item.price}
                          image={item.image}
                          handleCart={handleCart}
                        />
                   })
               }
            </div>
        </div>
    )
}