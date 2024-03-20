
export type BasicResponse<T> = {
    data: T
    ok: boolean
    msg: string | null
}