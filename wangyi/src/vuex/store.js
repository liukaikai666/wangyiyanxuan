// import Vue from 'vue';
// import Vuex from 'vuex';

// Vue.use(Vuex);

// //state用于存储数据项
// // action 用于相应状态变化  不能操作state 而跟mutations区别在于
// // 可以存在异步代码
// // mutations 单线程同步代码用于操作state
// // getters 用于获取数据的接口
// export default new Vuex.Store({
// 	state:{
// 		date:""
// 	},
// 	mutations:{
// 		add_date(state,date){
// 			state.date = date;
// 		}
// 	},
// 	actions:{
// 		addDate({commit},date){
// 			commit("add_date",date);
// 		}
// 	},
// 	getters:{
// 		getDate:function(state){
// 			return state.date;
// 		}
// 		//getDate:(state)=> state.date
// 	}
// });
// {commit}自解构的传参方式，传过来的是一个对象
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

/*
	state 用于存储数据项
	mutations 单线程同步代码用于操作state
	actions 用于响应状态变化 不能操作state 而跟mutations区别在于可以存在异步代码
	getters 用于获取数据的接口
*/

export default  new Vuex.Store({
	state:{
		orderList:[]
	},
	mutations:{
		add_order(state,pro){
		// 	var flag = false;
		// 	state.orderList.forEach(function(n,index,arr){
		// 		if (n.name === pro.name) {
		// 			flag=true;
		// 			arr[index] = pro;
		// 		}
		// 	});
		// 	if (flag) {
				state.orderList.push(pro);
		// 	}
		}
	},
	actions:{
		addOrder({commit},pro){
			commit("add_order",pro)
		}
	},
	getters:{
		getOrderList:function(state){
			return state.orderList
		}
	}

	// state: {
	// 	orderList:[] 
	// },
	// mutations: {
	// 	add_order(state, pro){
	// 		var flag = false;
	// 		state.orderList.forEach(function(n, index, arr){
	// 			if(n.name === pro.name){
	// 				flag = true;
	// 				arr[index] = pro;
	// 			}
	// 		});

	// 		if(!flag){
	// 			state.orderList.push(pro);
	// 		}
	// 	}

	// },
	// actions: {
	// 	addOrder({commit}, pro){
	// 		commit("add_order", pro);
	// 	}
	// },
	// getters: {
	// 	getOrderList: function(state){
	// 		return state.orderList
	// 	}
	// }
});



