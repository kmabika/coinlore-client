import { InMemoryCache, makeVar } from "@apollo/client";

export let hiddenList: any;
if (typeof window !== 'undefined') {
   hiddenList = makeVar<string[]>([JSON.parse(localStorage.getItem('hiddenList')!)]);
}

export const hiddenItemsVar = makeVar<string[]>([]);

export const cache = new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          cartItems: {
            read() {
              return hiddenItemsVar();
            }
          }
        }
      }
    }
  });