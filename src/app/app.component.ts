import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'p3';

  async p1() {
    const challengeData = [53, 69, 96, 194];
    const challenge = new Uint8Array(challengeData);
    const idData = [134, 196, 104];
    const id = new Uint8Array(idData);
    const publicKeyCredentialCreationOptions = {
      challenge,
      rp: {
        name: 'Duo Security',
        id: 'duosecurity.com',
      },
      user: {
        id,
        name: 'lee@webauthn.guide',
        displayName: 'Lee',
      },
      pubKeyCredParams: [{ alg: -7, type: 'public-key' }],
      authenticatorSelection: "",
      timeout: 60000,
    };
    try {
      const credential = await navigator.credentials.create({
        publicKey: {
          challenge,
          rp: {
            name: 'Duo Security',
            id: 'duosecurity.com',
          },
          user: {
            id,
            name: 'lee@webauthn.guide',
            displayName: 'Lee',
          },
          pubKeyCredParams: [{ alg: -7, type: 'public-key' }],
          authenticatorSelection: {
            authenticatorAttachment: 'cross-platform',
            userVerification: 'required',
          },
          timeout: 60000,
        },
      });

      // Trabajar con la credencial creada
      console.log(credential);
    } catch (error) {
      // Manejar errores
      console.error(error);
    }
  }

  creationData(): PublicKeyCredentialCreationOptions {
    const challengeData = [53, 69, 96, 194];
    const challenge = new Uint8Array(challengeData);
    const idData = [134, 196, 104];
    const id = new Uint8Array(idData);
    return {
      attestation: 'direct',
      authenticatorSelection: {
        authenticatorAttachment: 'cross-platform',
        userVerification: 'required',
      },
      challenge,
      pubKeyCredParams: [],
      rp: {
        name: 'Duo Security',
        id: 'https://alanibanez.github.io/p3/',
      },
      timeout: 6000,
      user: {
        id,
        name: 'alan',
        displayName: 'Lee',
      },
    };
  }

  async createData() {
    try {
      const credential = await navigator.credentials.create({
        publicKey: this.creationData(),
      });
      console.log(credential);
    } catch (error) {
      console.log(error);
    }
  }
}
