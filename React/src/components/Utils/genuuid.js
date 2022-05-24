import { v4 as uuid } from 'uuid';

const genUUID = () => {
    const unique_id = uuid();
    const small_id = unique_id.slice(0,32);
    const small_id_split = small_id.split("-");
    let small_id_final = "";
    for (let i = 0; i < small_id_split.length; i++) {
        small_id_final += small_id_split[i];
    }
    return small_id_final;
}

export default genUUID