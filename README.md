# Redux toolkit

1.firstly we should create a Store..

` Store = configureStore({
    reducer: {}
})`

2.make a initial state of your Items.     `initialState : {}`
   
3.Slice = createSlice({
    name:'ItemsList',
    initialState,
    reducers: {}
})

4.Slice.reducer --> manage the `state` and `actions` of the Items of named 'ItemsList' Stored in reducer: {ItemsList} in your configureStore({}).

5.{...reducers} = Slice.actions  ---> to select the action you want to manage.

6.useSelector( ()=> () )    --> to select the value from your ItemLists

7.dispatch = useDispatch() ---> Show the users your functionality that you define in the reducers : {} in your Slice.

## It is a Project of Cart items you use in the Shopping Apps by Redux toolkit.

cc @ 2024 Ansh singh
