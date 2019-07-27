const initialState = {
    arr:[
        {
            text:'学习redux',
            isDone:false,
            isEdit:false
        }
    ],
    status: 1 //1 显示全部 2 显示未完成 3 显示已完成
};

function todoApp(state = initialState,action) {
    if (action.type === "ADD_TODO"){
        return{
            ...state,
            arr:[...state.arr, action.item]
        }
    }else {
        // 返回原始状态
        return state;
    }
}



export default todoApp;








// 需要导出  纯函数

// export default function count(state=0, action) {
//     switch (action.type) {
//         case "INCREMENT":
//             return state + 1;
//         case "DECREMENT":
//             return state - 1;
//         default:
//             return state
//     }
// }


// export default function count(state = {
//     count: 0
// }, action) {
//     switch (action.type) {
//         case "INCREMENT":
//                 // return state + 1;
//             const obj = {count : state.count + 1};
//             return obj;
//             // state.count = state.count + 1;
//             // return state;
//
//             return {
//               ...state,
//                 // 修改对象时,先拷贝原对象（state） 再修改其中的具体项 再返回一个新对象
//             };
//         case "DECREMENT":
//             return state - 1;
//         default:
//             return state
//     }
// }