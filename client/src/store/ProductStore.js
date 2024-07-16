import {makeAutoObservable} from 'mobx'

export default class UserStore {
    constructor() {
        this._types = []
        this._brands = []
        this._product = []
        this._selectedType = null
        this._selectedBrand = null
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }
    setType(types) {
        this._types.push(types)
    }

    setBrands(brands) {
        this._brands = brands
    }
    setBrand(brands) {
        this._brands.push(brands)
    }

    setProduct(product) {
        this._product.push(product)
    }
    setProducts(product) {
        this._product = product
    }

    setSelectedType(type) {
        this._selectedType = type
    }
    setSelectedBrand(brand) {
        this._selectedBrand = brand
    }  

    get types() {
        return this._types
    }
    get brands() {
        return this._brands
    }
    get product() {
        return this._product
    }
    get selectedType() {
        return this._selectedType
    }
    get selectedBrand() {
        return this._selectedBrand
    }
    
}