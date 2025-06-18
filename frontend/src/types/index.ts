
export type BasicResponse<T> = {
    data: T
    ok: boolean
    msg: string | null
}

export type Basic = {
    id: number
    nombre : string
}