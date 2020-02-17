/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
export type Specialty = "Bath" | "Boxing" | "Fight" | "Gym" | "Spa" | "Water" | "%future added value";
import type { FragmentReference } from "relay-runtime";
declare export opaque type Tile_trainerData$ref: FragmentReference;
declare export opaque type Tile_trainerData$fragmentType: Tile_trainerData$ref;
export type Tile_trainerData = {|
  +id: ?string,
  +name: ?string,
  +specialty: ?Specialty,
  +$refType: Tile_trainerData$ref,
|};
export type Tile_trainerData$data = Tile_trainerData;
export type Tile_trainerData$key = {
  +$data?: Tile_trainerData$data,
  +$fragmentRefs: Tile_trainerData$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "Tile_trainerData",
  "type": "Trainer",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "id",
      "args": null,
      "storageKey": null
    },
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
};
// prettier-ignore
(node/*: any*/).hash = 'd27dd2b3c495a4dbdc4051019836818e';
module.exports = node;
