const stateDefault ={
    danhSachGheDangDat:[
        // {soGhe:'A1',gia:1000}
    ]
}

const BaiTapDatVeReducer =(state=stateDefault, action)=>{
    switch(action.type){
        case 'DAT_GHE':{
            let danhSachGheDangDatUpdate =[...state.danhSachGheDangDat];
            let index = danhSachGheDangDatUpdate.findIndex(gheDangDat=> gheDangDat.soGhe === action.ghe.soGhe);
            if(index !== -1){//Nếu người dùng click gghế đang đặt có trong mảng => remove đi
                danhSachGheDangDatUpdate.splice(index,1);
            }else{//Nếu người dùng click gghế đang đặt chưa có trong mảng => push vào mảng
                danhSachGheDangDatUpdate.push(action.ghe)
            }
            //Cập nhật lại state giao diện render lại
            state.danhSachGheDangDat = danhSachGheDangDatUpdate;
            return {...state}
        }


        default: return{...state}
    }
}

export default BaiTapDatVeReducer;