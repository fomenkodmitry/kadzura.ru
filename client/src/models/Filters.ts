type Filter = {
    Field: string,
    Operation: "contains"
    Values : string[]
}
type Filters = Filter[]

export type {Filters}