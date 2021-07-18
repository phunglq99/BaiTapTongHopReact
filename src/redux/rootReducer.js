import {combineReducers, createStore} from 'redux';
import BaiTapOanTuXiReducer from './BaiTapOanTuXiReducer'


const rootReducer = combineReducers({
    //Liệt kê state của ứng dụng
    BaiTapOanTuXiReducer,
    //...Rất nhiều state cho từng nghiệp vụ
});

// Dối với state là obj or array
//=> Redux chỉ render lại khi obj or array được gán bằng obj or array mới imutable
/*
    ví dụ có objA
    objectA.Thuoctinh = gán giá trị mới => không thay đổi( redux không biết 
    được giá trị đó thay đổi => không render lại giao diện)
    objectA ={} =>gán = obj mới
    objectA ={...object, thuocTinh:'giaTriMoi'}
*/
export const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());