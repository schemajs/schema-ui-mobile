import React,{Component} from "react";
import { View, Text } from "@tarojs/components";
import { observer } from "mobx-react";
import { UniElementStore } from "./node_modules/@/uniform/common/stores/UniElementStore";
import ListItem from "../../stateless/ListItem";

interface IProps  {
  store:UniElementStore
};

@observer
class ListItem extends Component<IProps,any> {
  onClick(){
    this.props.store.setValue(true)

  }
  render() {
    const { store } = this.props;
    const {schemaData} = store
    return (
        <ListItem
          title={schemaData.title}
          note={schemaData.description}
        ></ListItem>
    );
  }
}

export default ListItem;