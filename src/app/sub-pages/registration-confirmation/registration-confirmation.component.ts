import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AngularFirestore} from '@angular/fire/firestore';
import {RegistrationDataProviderService} from '../../services/registration-data-provider.service';
import firebase from "firebase";
import Reference = firebase.storage.Reference;

@Component({
    selector: 'app-registration-confirmation',
    templateUrl: './registration-confirmation.component.html',
    styleUrls: ['./registration-confirmation.component.css']
})
export class RegistrationConfirmationComponent implements OnInit {

    private storageRef: Reference | undefined;

    constructor(public dataProvider: RegistrationDataProviderService, private router: Router) {
    }

    ngOnInit(): void {
    }

    onDownloadClick(): void {
        this.storageRef = firebase.storage().ref('registration-pdf/' + this.dataProvider.currentDocId + '.pdf');
        this.storageRef?.getDownloadURL().then(url => {
            window.open(url);
        });
    }

}
