import {Component, Input, Output, EventEmitter} from '@angular/core';
import {INode} from "../../models/node.models";

@Component({
  selector: 'ngrx-edit-node',
  template: `
      <div class="editor">
          <h3>Edit Node</h3>
          <input [ngModel]="node.value" (ngModelChange)="updateNodeValue($event)">
      </div>

  `,
  styleUrls: ['./edit-node.component.css']
})
export class EditNodeComponent {
  @Input() node: INode;
  @Output() onUpdateNode = new EventEmitter();

  updateNodeValue(value) {
    this.onUpdateNode.emit(value);
  }
}
