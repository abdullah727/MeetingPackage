export interface Channel{
    id:number
    title: string
    visible: boolean
}
export interface Hotel{
    id:number
    title: string
    channels: Channel[]
}