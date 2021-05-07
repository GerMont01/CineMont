class Seat {
    constructor(id) {
        this.id = id,
        this.status = 'available'
    }
    select(){
        this.status = 'occupied'
    }
    remove(){
        this.status = 'available'
    }
}