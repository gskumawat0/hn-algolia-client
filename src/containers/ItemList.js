import React, {Component} from 'react';
import {connect} from 'react-redux';
import { fetchItems} from '../store/actions/items';
import SearchItem from '../components/SearchItem';


class ItemList extends Component{
    componentDidMount(){
        debugger
        this.props.fetchItems();
    }
    render(){
        debugger
        const {items} = this.props;
        console.log(items);
        let itemList = items.map((item,i)=> < SearchItem 
            key={item.objectID} 
            created_at={item.created_at || Date.now()}
            title={item.title || 'This is message head'}
            author={item.author || 'unknown'} 
            points= {item.points|| 20}
            num_comments = {item.num_comments || 20}
            url = {item.url ||'https://gskumawat.herokuapp.com' }
        />);
        return (
            <div>
                {itemList}
            </div>    
        );
    }
    
}


function mapStateToProps(state){
    return {
        items: state.items
    };
}



export default connect(mapStateToProps,{fetchItems})(ItemList);