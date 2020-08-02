import React from "react";
import {BookConsumer} from "../service-context";

const withService = () => (Details) => {
    return (props) => {
        return (
            <BookConsumer>
                {
                    (book_api) => {
                        return (
                            <Details {...props} book_api={book_api}/>
                        )
                    }
                }
            </BookConsumer>
        )
    }
}
export default withService