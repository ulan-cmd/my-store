import React, {useEffect, useState} from "react";
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import {useParams} from 'react-router-dom';
import {urls} from "../../../data/constants";
import styles from "./ProductsAdminPage.module.css";
import Form from "react-bootstrap/Form";

const ModalUpdate = ({show, handleClose, data, handleSubmit}) => {

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Редактирование</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="name_product">
                        <Form.Label>Название</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Введите название товара"
                            defaultValue={data.name}
                        />
                    </Form.Group>
                    <input type="hidden" value={data.id} id="id_product"/>
                    <Form.Group className="mb-3" controlId="price_product">
                        <Form.Label>Цена</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Введите цену в сомах"
                            defaultValue={data.price}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="img_product">
                        <Form.Label>Фото</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Укажите ссылку на изображение"
                            defaultValue={data.img}
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Сохранить
                    </Button>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Отменить
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

const TableRow = (props) => {
    return (
        <tr className={styles.row}>
            <td>{props.item.id}</td>
            <td>{props.item.name}</td>
            <td>{props.item.price}</td>
            <td><img src={props.item.img}/></td>
            <td>
                <button onClick={() => props.deleteProduct(props.item.id)}>Удалить</button>
                <button onClick={() => props.handleShow(props.item)}>Редактировать</button>
            </td>
        </tr>
    )
}

const ProductsAdminPage = () => {
    const params = useParams();
    const [products, setProducts] = useState([]);
    const [product, setProduct] = useState({});
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = (item) => {
        setShow(true);
        setProduct(item);
    }

    const getProduct = () => {
        fetch(urls[params.product])
            .then(response => response.json())
            .then(data => setProducts(data))
    }

    const deleteProduct = (id) => {
        const url = urls[params.product] + '/' + id;

        const options = {
            method: 'DELETE'
        }

        fetch(url, options)
            .then(response => {
                if(response.ok){
                    alert('Товар успешно удален');
                    getProduct();
                } else{
                    alert('Попробуйте позже');
                }
            })
    }

    const update = (e) => {
        e.preventDefault();

        const name = e.target.name_product.value;
        const price = e.target.price_product.value;
        const img = e.target.img_product.value;
        const id = e.target.id_product.value;

        const data = {
            name,
            price,
            img
        }

        const url = urls[params.product] + '/' + id;

        const options = {
            method: "PUT",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(data)
        }

        fetch(url, options)
            .then(response => {
                if(response.ok){
                    alert('Товар успешно обновлен');
                    getProduct();
                } else{
                    alert('Произошла ошибка. Повторите попытку позже');
                }
            })
    }

    useEffect(getProduct, []);

    return (
        <div className="container">
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Название</th>
                    <th>Цена</th>
                    <th>Изображение</th>
                    <th>Действия</th>
                </tr>
                </thead>
                <tbody>
                {
                    products.map(item => <TableRow
                        key={item.id}
                        deleteProduct={deleteProduct}
                        handleShow={handleShow}
                        item={item}/>)
                }
                </tbody>
            </Table>
            <ModalUpdate
                data={product}
                show={show}
                handleClose={handleClose}
                handleSubmit={update}
            />
        </div>
    )
}

export default ProductsAdminPage;