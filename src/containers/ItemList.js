import React, {Component} from 'react';
import {connect} from 'react-redux';
import { fetchItems} from '../store/actions/items';
import SearchItem from '../components/SearchItem'


class ItemList extends Component{
    componentDidMount(){
        this.props.fetchItems();
    }
    render(){
        const {items} = this.props;
        let itemList = items.map((item,i)=> < SearchItem 
            key={i} 
            date={Date.now()}
            title={item.title || 'This is message head'}
            user={item.user || 'asasaS'} 
            points= {item.points|| 20}
            comments = {item.comments.length || 20}
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