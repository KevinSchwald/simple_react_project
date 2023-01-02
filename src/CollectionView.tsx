import React from "react";
import {Collection} from "./Products";
import {ItemView} from "./ItemView";
import {Box} from "@material-ui/core";

export class CollectionView extends React.Component<Collection>{
    constructor(props: Collection) {
        super(props);
        this.handleItemClicked = this.handleItemClicked.bind(this)
    }
    handleItemClicked(id: number) {
        console.log(`handleItemClick : ${id}`)
        this.props.handleItemClicked(id)
    }

    render() {
        let items = this.props.items.map((item) => {
            return (
                <ItemView {...item} key={item.id}
                                    onItemClicked={this.handleItemClicked} />
            )
        })
        return(
            <Box display={"flex"} flexWrap={"wrap"}>
                {items}
            </Box>
        )
    }
}
