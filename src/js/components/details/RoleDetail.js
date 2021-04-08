import React from "react";

const RoleDetail = (props) => {

    console.log("Props role detail")
    console.log(props)

    return (
        props.item &&
            <React.Fragment>
                <h1>{props.item.role}</h1>
                <p>{props.item.created_at}</p>
            </React.Fragment>
    )
}

export default RoleDetail;