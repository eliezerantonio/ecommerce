'use strict'

const OrderHook = exports = module.exports = {}

OrderHook.method = async model => {

  model.$sideLoaded.subtotal = await model.items().getSum('subtotal')
  model.$sideLoaded.qty_items = await model.items().getSum('quantity')
  model.$sideLoaded.discount = await model.discount().getSum('discount')

  model.total = model.$sideLoaded.subtotal - model.$sideLoaded.discount



}

OrderHook.updateCollectionValues = async =>{
  for (let model of models) {
    model = await OrderHook.updateCollectionValues(model)
  }
}
