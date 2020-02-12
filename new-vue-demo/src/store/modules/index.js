// import router from '../../router/index';

export default {
    state:{
        menuItems:{
            item1:[
                {id:'item1-sub1',name:'item1-sub1'},
                {id:'item1-sub2',name:'item1-sub2'},
                {id:'item1-sub3',name:'item1-sub3'},
            ],
            item2:[
                {id:'item2-sub1',name:'item2-sub1'},
                {id:'item2-sub2',name:'item2-sub2'},
                {id:'item2-sub3',name:'item2-sub3'},
            ],
            item3:[
                {id:'item3-sub1',name:'item3-sub1'},
                {id:'item3-sub2',name:'item3-sub2'},
                {id:'item3-sub3',name:'item3-sub3'},
            ],
        },
        contents:{
            'item1-sub1':{title:'item1-sub1',content:'item1-sub11111111111111111111'},
            'item1-sub2':{title:'item1-sub2',content:'item1-sub2111111111111111111'},
            'item1-sub3':{title:'item1-sub3',content:'item1-sub31111111111111111111'},
            'item2-sub1':{title:'item2-sub1',content:'item2-sub12222222222222222222'},
            'item2-sub2':{title:'item2-sub2',content:'item2-sub22222222222222222222'},
            'item2-sub3':{title:'item2-sub3',content:'item2-sub32222222222222222222'},
            'item3-sub1':{title:'item3-sub1',content:'item3-sub13333333333333333333'},
            'item3-sub2':{title:'item3-sub2',content:'item3-sub23333333333333333333'},
            'item3-sub3':{title:'item3-sub3',content:'item3-sub33333333333333333333'}
        },
        curSideMenu:''
    },
    mutations:{
        curSideMenuChange(state,menu){
            state.curSideMenu = menu
        }
    }
}