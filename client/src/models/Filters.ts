type Filter = {
    field: string,
    operation: "contains" | "equal"
    values : string[] | number[]
}
type Filters = Filter[]

export type {Filters}