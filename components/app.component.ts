import {Component, Input, EventEmitter, Output} from '@angular/core';
import{FormsModule} from '@angular/forms';

@Component({
    selector: 'app-item-list', 'app-root', 'app-add-item',
    templateUrl: './item-list.component.html', './app.component.html',
    styleUrls: ['./app.component.css', './item-list.component.css']
})
export class AppComponent{
    items: {name: string; comprado: boolean}[]=[];

    adicionarItem(item:string){
        this.items.push({name: item, comprado; false});
    }
    editarItem(item:string){
        this.items.push({name: item, comprado; false});
    }
    excluirItem(index:number){
        this.items.splice(index, 1);
    }
}
export class AddItemComponent {
    newItem: string='';

    @Output() addItem = new EventEmitter<string>();
    

    onAddItem()[
        if (this.newItem.trim()){
            this.addItem.emit(this.itemName); 
            this.newItem = '';]

            console.log('Botão Adicionar clicado');  
            if (this.newItem.trim()) {
                this.addItem.emit(this.newItem);
                this.newItem = '';
        }
              
    }
}
            

export class ItemListComponent {
  @Input() items: { name: string; comprado: boolean }[] = [];
  @Output() itemEdited = new EventEmitter<{ index: number, name: string }>();
  @Output() itemDeleted = new EventEmitter<number>();

  editIndex: number | null = null;
  editName: string = '';

  marcarComoComprado(index: number) {
    this.items[index].comprado = !this.items[index].comprado;
  }

  excluir(index: number) {
    this.itemDeleted.emit(index);
  }

  editar(index: number) {
    this.editIndex = index;
    this.editName = this.items[index].name;
  }

  salvarEdicao(index: number) {
    if (this.editName.trim()) {
      this.itemEdited.emit({ index, name: this.editName });
      this.editIndex = null;
    }
  }
}
export class FormsModule; 



