import './ItemView.css'
import { Card, CardHeader, CardMedia} from "@material-ui/core";
import {IProduct} from "./Products";
import React from "react";

export interface IItemView extends IProduct {
    onItemClicked(id: number): void
}

export class ItemView extends React.Component<IItemView> {
    constructor(props: IItemView) {
        super(props);
        this.onItemClicked = this.onItemClicked.bind(this)
    }
    render() {
        return (
            <div className={"item-view-card"}>
                <Card onClick={this.onItemClicked}>
                    <CardHeader title={this.props.name}
                                subheader={this.props.type}
                                />
                    <CardMedia className={"card-media-image"}
                               style={{height: "300px"}}
                               src={this.props.image}
                               />
                </Card>
            </div>
        )
    }
    onItemClicked() {
        this.props.onItemClicked(this.props.id)
    }
}