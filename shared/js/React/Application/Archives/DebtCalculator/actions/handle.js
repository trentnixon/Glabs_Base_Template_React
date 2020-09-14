import store from "shared/js/React/Store/store";

export function handleClick(Position, Category){

    /**
     * 
     * 3 steps to changing the App State
     * 1. Change the Amount value for the Section Value()
     * 2. Set groupSet to true if in a set CheckGroup()
     * 3. Update the button state for the whole app Buttons()
     * 
     */

    
    // Get the Redux State
    const state = store.getState();

    const Categories=[
        {
            Data:state.APP.APPLICATION[0],
            SwitchType:"STORE_SWITCH_SAVINGS",
            AmountType:"STORE_SAVINGS",
            Amountkey:"SavingsTotal"
           
        },
        {
            Data:state.APP.APPLICATION[1],
            SwitchType:"STORE_SWITCH_SPENDING",
            AmountType:"STORE_SPENDING",
            Amountkey:"SpendingTotal"
    
        }
    ]

    const Measure = Categories[Category].Data[Position];
    const Block = Categories[Category];
    // New Value

    Value(Block.Data[Position].state, Measure.amount, Block, state);
    // Button Groups
    CheckGroup(Block.Data[Position].state,Measure,Block,state )
    // Set Button State
    Buttons(Block,Measure, Position, state)
}


function Buttons(Block, Measure, Position, state){
    
    // Change Clicked Button State
    Block.Data[Position].state = !Block.Data[Position].state
    // Store new Button
    store.dispatch({ type:Block.SwitchType, payload:Block.Data});
}




function Value(BtnState, amount, Block, APP){
    const {AmountType,Amountkey} = Block
   
    let NewValue, Values=[parseInt(APP.APP.TrackingBar[Amountkey],10), parseInt(amount)];    
   
    BtnState ?  NewValue = Values[0] + Values[1] : NewValue = Values[0] - Values[1]

    store.dispatch({ type:AmountType, payload:NewValue});
}



function CheckGroup(BtnState, Measure, Block, state){

    if(Measure.group.length>0){
        //console.log("CheckGroup", BtnState, Measure.group, Measure, Block,state.APP.Groups)
    
        let Find =  _.findIndex(state.APP.Groups, function(o) {  return o['key'] === Measure.group;  })
    
        state.APP.Groups[Find].value= !state.APP.Groups[Find].value;
    
        store.dispatch({ type:"STORE_BUDGET_GROUPS", payload:state.APP.Groups});
    }
    
}