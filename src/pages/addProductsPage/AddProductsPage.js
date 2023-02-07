import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const AddProductsPage = () => {

    const save = (e) => {
        e.preventDefault();
        const name = e.target.name_product.value;
        const price = e.target.price_product.value;
        const img = e.target.img_product.value;
        const group = e.target.group.value;

        const data = {
            name,
            price,
            img
        }

    }

    return (
        <div className="container">
            <h2>Добавление товаров</h2>
            <Form onSubmit={save}>
                <Form.Group className="mb-3" controlId="name_product">
                    <Form.Label>Название</Form.Label>
                    <Form.Control type="text" placeholder="Введите название товара" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="price_product">
                    <Form.Label>Цена</Form.Label>
                    <Form.Control type="number" placeholder="Введите цену в сомах" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="img_product">
                    <Form.Label>Фото</Form.Label>
                    <Form.Control type="text" placeholder="Укажите ссылку на изображение" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="group">
                    <Form.Label>Продукция</Form.Label>
                    <Form.Select>
                        <option value="0">Выберите</option>
                        <option value="iphone">iphone</option>
                        <option value="ipad">ipad</option>
                        <option value="watch">watch</option>
                    </Form.Select>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Сохранить
                </Button>
            </Form>
        </div>
    )
}

export default AddProductsPage;