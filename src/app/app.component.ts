import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

interface Draggable {
  id: number;
  name: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-17';
  dragList: Draggable[] = [
    { id: 1, name: "foo" },
    { id: 2, name: "bar" },
    { id: 3, name: "baz" },
    { id: 4, name: "qux" },
    { id: 5, name: "abc" },
  ];
  dropList: Draggable[] = [];

  onDragStart(event: DragEvent, draggedObject: Draggable) {
    const index = this.dragList.findIndex((l) => l.id === draggedObject.id);
    event?.dataTransfer?.setData("text", index.toString());
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
  }

  onDrop(event: DragEvent) {
    const indexOfItemBeingDragged = Number(
      event?.dataTransfer?.getData("text")
    );
    if (typeof indexOfItemBeingDragged !== "number") {
      return;
    }
    const draggedObject = this.dragList[indexOfItemBeingDragged];
    this.dragList.splice(indexOfItemBeingDragged, 1);
    this.dropList.push(draggedObject);
    event?.dataTransfer?.clearData?.();
  }
}
