import { render } from "@testing-library/react"
import App from "../StartFile"

describe("Counter test",()=>{

    test("render",()=>{
        render(<App />)
    })
})