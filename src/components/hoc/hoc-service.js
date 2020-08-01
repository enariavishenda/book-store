import React from "react";
import {BookConsumer} from "../service-context";

const withService = (mapMethodsToProps) => (Details) => {
    return (props) => {
        return (
            <BookConsumer>
                {
                    (book_api) => {
                        const serviceProps = mapMethodsToProps(book_api)
                        return (
                            <Details {...props} {...serviceProps}/>
                        )
                    }
                }
            </BookConsumer>
        )
    }
}
export default withService