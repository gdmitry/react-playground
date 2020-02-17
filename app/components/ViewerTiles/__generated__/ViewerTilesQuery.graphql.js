/**
 * @flow
 * @relayHash dfa0a5396ca03d0392b98c5609f10f19
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Tile_trainerData$ref = any;
export type ViewerTilesQueryVariables = {||};
export type ViewerTilesQueryResponse = {|
  +allTrainers: ?$ReadOnlyArray<?{|
    +id: ?string,
    +$fragmentRefs: Tile_trainerData$ref,
  |}>
|};
export type ViewerTilesQuery = {|
  variables: ViewerTilesQueryVariables,
  response: ViewerTilesQueryResponse,
|};
*/


/*
query ViewerTilesQuery {
  allTrainers {
    id
    ...Tile_trainerData
  }
}

fragment Tile_trainerData on Trainer {
  id
  name
  specialty
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "ViewerTilesQuery",
    "type": "RootQuery",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "allTrainers",
        "storageKey": null,
        "args": null,
        "concreteType": "Trainer",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          {
            "kind": "FragmentSpread",
            "name": "Tile_trainerData",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "ViewerTilesQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "allTrainers",
        "storageKey": null,
        "args": null,
        "concreteType": "Trainer",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "name",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "specialty",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "ViewerTilesQuery",
    "id": null,
    "text": "query ViewerTilesQuery {\n  allTrainers {\n    id\n    ...Tile_trainerData\n  }\n}\n\nfragment Tile_trainerData on Trainer {\n  id\n  name\n  specialty\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'dc77deeecd9e0fa6538ef6efd1be09bc';
module.exports = node;
