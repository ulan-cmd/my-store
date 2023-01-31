import React, {useState} from "react";
import styles from "./UsersPage.module.css";
import MyAccordion from "../../components/Accordion/MyAccordion";


const UserCard = ({data}) => {

    const address = `${data.address.city} ${data.address.street}`;
    const company = `${data.company.name} ${data.company.catchPhrase}`;

    return (
        <div className={styles.user_card}>
            <h2>{data.name}</h2>
            <ul>
                <li>{data.email}</li>
                <li>{data.phone}</li>
                <li>{data.website}</li>
            </ul>
            <MyAccordion
                title="Адрес"
                desc={address}
            />
            <MyAccordion
                title="Компания"
                desc={company}
            />
        </div>
    )
}

const UsersPage = () => {
    const [users, setUsers] = useState([]);

    const getUsers = () => {
        const link = 'https://jsonplaceholder.typicode.com/users';

        fetch(link)
            .then(response => response.json())
            .then(data =>  setUsers(data))
    }

    return (
        <div className="container">
            <button onClick={getUsers}>
                Получить ползователей
            </button>
            <div className={styles.users_container}>
                {
                    users.map((item, index) => {
                        return (
                            <UserCard
                                key={index}
                                data={item}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default UsersPage;