import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-actorlist',
  templateUrl: './actorlist.component.html',
  styleUrls: ['./actorlist.component.css']
})
export class ActorlistComponent implements OnInit {

  actorList;
  newName;
  newRating;
  selectedIndex: number;
  tempActor;
  tempActorList;

  constructor() { }

  ngOnInit() {
    this.actorList = [
      { name: 'Ammitabh Bachhan', rating: 9.5 },
      { name: 'Kamal Hasan', rating: 7.6 },
      { name: 'Aishwarya Rai Bachhan', rating: 8.0 },
      { name: 'Kajol', rating: 7.4 },
      { name: 'Rajnikant', rating: 9.9 }
    ];

    this.newName = '';
    this.newRating = 0.0;

    this.selectedIndex = -1;

    this.tempActor = null;

    this.tempActorList = this.actorList.slice();
  }

  deleteActor(index) {
    this.actorList.splice(index, 1);
  }

  addActor() {
    this.actorList.push({
      name: this.newName,
      rating: this.newRating
    });

    this.newName = '';
    this.newRating = 0;
  }

  addActor2(name: string, rating: number) {
    // this.actorList.push({
    //   name: name,
    //   rating: rating
    // });

    this.actorList.push({ name, rating });
  }

  editActor(index) {
    this.selectedIndex = index;

    // SHALLOW COPY PROBLEM -- Don't do this!!
    // this.tempActor = this.actorList[index];

    // DEEP COPY
    // Approach - 1 (Not preferred)

    // this.tempActor = {
    //   name: this.actorList[index].name,
    //   rating: this.actorList[index].rating
    // };

    // Approach - 2 (Recommended approach)
    this.tempActor = Object.assign({}, this.actorList[index]);
  }

  saveActor(index) {
    this.selectedIndex = -1;
  }

  cancelEdit(index) {
    // this.actorList[index] = this.tempActor;
    this.actorList.splice(index, 1, this.tempActor);
    this.selectedIndex = -1;
  }

  handleKey(event: KeyboardEvent, index) {
    if (event.key === 'Escape') {
      this.cancelEdit(index);
    }
  }

  resetList() {
    this.actorList = this.tempActorList.slice();
  }

  sortList(prop: string, direction: string) {
    this.actorList.sort((obj1, obj2) => {
      if (prop === 'name') {
        // String Comparison
        if (direction === 'ascending') {
          if (obj1[prop] < obj2[prop]) { return -1; }
          if (obj1[prop] > obj2[prop]) { return 1; }
          if (obj1[prop] === obj2[prop]) { return 0; }
        } else {
          if (obj1[prop] < obj2[prop]) { return 1; }
          if (obj1[prop] > obj2[prop]) { return -1; }
          if (obj1[prop] === obj2[prop]) { return 0; }
        }
      }
      if (prop === 'rating') {
        // Numeric Comparison
        if (direction === 'ascending') {
          return obj1[prop] - obj2[prop];
        } else {
          return obj2[prop] - obj1[prop];
        }
      }
    });
  }
}

