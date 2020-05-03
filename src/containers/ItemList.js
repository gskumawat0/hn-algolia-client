import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { fetchItems } from "../store/actions/items";
import SearchItem from "../components/SearchItem";

class ItemList extends PureComponent {
	componentDidMount() {
		let { items } = this.props;
		if (!items || !items.length) {
			this.props.fetchItems();
		}
	}
	render() {
		const { items, errors } = this.props;
		let itemList = items.map((item, i) => (
			<SearchItem
				key={item.objectID}
				created_at={item.created_at || Date.now()}
				title={item.title}
				author={item.author || "unknown"}
				points={item.points || 20}
				num_comments={item.num_comments || 20}
				url={item.url || "https://gskumawat.herokuapp.com"}
			/>
		));
		return (
			<div>
				{errors && errors.message && (
					<div className="alert alert-danger">{errors.message}</div>
				)}
				{itemList}
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		items: state.items,
		errors: state.errors,
	};
}

export default connect(mapStateToProps, { fetchItems })(ItemList);
