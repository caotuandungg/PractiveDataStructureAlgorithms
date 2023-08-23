class Node {
    constructor (data) {
        this.data = data
        this.next = null
    }
}
class LinkedList  {
    constructor(){
        this.head = null;
    }
    addData(newData){
        let newNode = new Node(newData)
        newNode.next = this.head
        this.head = newNode
    }
    printList(){
        let current = this.head
        while ( current != null){
            console.log(current.data + "  ")
            current = current.next
        }
    }
}
let list = new LinkedList()
list.addData(5)
list.addData(4)
list.addData(3)
list.addData(2)
list.addData(1)
list.printList();





// tao ra 1 ham tao link list: 
//     -tao ra 1 bien head 
//     -tao ra 1 ham de add data moi vao, tao 1 object newNode moi gom data va next, sau do kiem tra xem neu head bang null thi gan cho head = data do luon 
//     -tao ra 1 ham in cai list day ra, kiem tra xem neu head bang null thi tra ve undefined, sau do dung vong lap while check xem neu current.next = null thi thoat vong lap 
//     -tra ve 2 ham vua moi tao ra 
//     - insert data vao list
//     - in cai list ra