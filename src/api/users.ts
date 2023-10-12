import {httpRequest} from "@/api/common";

export function getUserData(name: string) {
    return  httpRequest.get(`/${name}`)
        .then(value => value.data)
}