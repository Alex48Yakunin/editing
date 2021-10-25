import {useSelector, useDispatch} from "react-redux";
import {selectEditService, deleteService} from "../actions/actionCreators";

export default function ServiceList() {
    const list = useSelector((state) => state.serviceList);
    const dispatch = useDispatch();

    const handleEdit = (id) => {
        const item = list
            .items
            .find((service) => service.id === id);
        dispatch(selectEditService(item));
    };

    const handleDelete = (id) => {
        dispatch(deleteService(id));
    };

    return (
        <ul>
            {list
                .items
                .map((item) => (
                    <li key={item.id}>{item.name} {item.price}
                        <button onClick={() => handleEdit(item.id)}>EDIT</button>
                        <button onClick={() => handleDelete(item.id)}>DELETE</button>
                    </li>
                ))}
        </ul>
    )
}