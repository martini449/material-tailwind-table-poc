import {ChangeDetectionStrategy, Component} from '@angular/core';
import {BehaviorSubject} from "rxjs";

export interface TableShoppingCartElement {
  partNumber: number;
  partDescription: string;
  quantity: number,
  lineReference: string,
  customerPrice: number
}

const ELEMENT_DATA: TableShoppingCartElement[] = [
    {
      partNumber: 112233441,
      partDescription: 'Fuel Filter Spin Something',
      quantity: 1,
      lineReference: 'Cust ABC Order',
      customerPrice: 634.32
    },
    {
      partNumber: 223344552,
      partDescription: 'Reflector',
      quantity: 12,
      lineReference: 'Support PSP 123',
      customerPrice: 634.32
    }, {
      partNumber: 334455663,
      partDescription: 'Loctite® Dielectric',
      quantity: 20,
      lineReference: 'Order Number 456',
      customerPrice: 634.32
    }, {
      partNumber: 445566774,
      partDescription: 'Interstate Battery',
      quantity: 44,
      lineReference: 'Farmer XYZ',
      customerPrice: 634.32
    }, {
      partNumber: 556677885,
      partDescription: 'V-Belt, Section',
      quantity: 5,
      lineReference: 'Serial Nr 888',
      customerPrice: 634.32
    }, {
      partNumber: 667788996,
      partDescription: 'Stabiliser',
      quantity: 6,
      lineReference: 'Cust Order 456',
      customerPrice: 634.32
    }
  ]
;

const DISPLAYED_COLUMNS = ['part-number', 'part-description', 'quantity', 'line-reference', 'customer-price', 'select'];

@Component({
  selector: 'app-poc-table',
  templateUrl: './poc-table.component.html',
  styleUrls: ['./poc-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class PocTableComponent {
  displayedColumns: string[] = DISPLAYED_COLUMNS;
  dataSource = new BehaviorSubject<TableShoppingCartElement[]>(ELEMENT_DATA);
  selectedRows: TableShoppingCartElement[] = [];
  priceEnabled: boolean = false;

  toggleRowSelection(selectedRow: TableShoppingCartElement) {
    if (this.selectedRows.includes(selectedRow)) {
      this.selectedRows = this.selectedRows.filter(row => row.partNumber !== selectedRow.partNumber);
    } else {
      this.selectedRows.push(selectedRow);
    }
  }

  increaseQuantity(partNumber: number) {
    this.dataSource.next(this.dataSource.getValue().map(element => {
      if (element.partNumber === partNumber) {
        element.quantity++;
      }
      return element;
    }))
  }

  decreaseQuantity(partNumber: number) {
    this.dataSource.next(this.dataSource.getValue().map(element => {
      if (element.partNumber === partNumber) {
        element.quantity--;
      }
      return element;
    }))
  }

  changeQuantity(partNumber: number, quantity: number) {
    this.dataSource.next(this.dataSource.getValue().map(element => {
      if (element.partNumber === partNumber) {
        element.quantity = quantity;
      }
      return element;
    }))
  }

  togglePrice() {
    this.priceEnabled = !this.priceEnabled;
    if (!this.priceEnabled) {
      this.displayedColumns = this.displayedColumns.filter(column => column !== 'customer-price');
    } else {
      this.displayedColumns = DISPLAYED_COLUMNS;
    }
  }
}
