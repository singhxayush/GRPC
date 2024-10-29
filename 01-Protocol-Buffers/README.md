# JSON vs. Protobuf File Size Comparison

This document demonstrates the file size difference between JSON and Protobuf representations of similar data. We'll achieve this by comparing the output of two files: `filesize_with_json.js` (which generates a JSON file) and `filesize_with_protobuf.js` (which generates a Protobuf serialized byte array).

## `filesize_with_json.js` (JSON)

`filesize_with_json.js` creates a JSON file containing an array of items, each with an `id`, `name`, and `price`. The file size is then calculated and printed to the console. See [`filesize_with_json.js`](filesize_with_json.js) for the complete code. The key function for determining the file size is `fs.statSync("./generated/items.json").size`.

<b>output:</b>

```
Size of json file is : 150 bytes
```

## `filesize_with_protobuf.js` (Protobuf)

item.proto file defines the structure to be given for generating a protobuffer file which will contain all the functionalities for serialization and deserialization of data of the same defined structure as provided in the item.proto.

Now `filesize_with_protobuf.js` uses this [item_pb.js](./generated/item_pb.js) to represent the same type of data. It creates several `Item` objects (defined by a Protobuf schema located in `./generated/item_pb`), adds them to an `ItemList`, serializes the list to a binary format, and then outputs the length of the resulting byte array. See [`filesize_with_protobuf.js`](filesize_with_protobuf.js) for the complete code. The `items.serializeBinary().length` gives the final protobuf size.

Pre-Requisite:

1. [protoc](https://grpc.io/docs/protoc-installation/)
2. node packages
   1. `"google-protobuf"`
   2. `"protoc-gen-js"`

<b>To create</b> [`item_pb.js`](./generated/item_pb.js)

```zsh
protoc --js_out=import_style=commonjs,binary:./generated item.proto
```

<b>output:</b>

```
Binary: Uint8Array(70) [
   10,  15,   8,   1,  18,   6, 76,  97, 112, 116, 111, 112,
   29,   0, 192, 121,  68,  10, 14,   8,   2,  18,   5,  77,
  111, 117, 115, 101,  29,   0,  0, 232,  65,  10,  17,   8,
    3,  18,   8,  75, 101, 121, 98, 111,  97, 114, 100,  29,
    0,   0, 200,  66,  10,  16,  8,   4,  18,   7,  77, 111,
  110, 105, 116, 111, 114,  29,  0, 128, 149,  67
]
Decoded: {
  itemList: [
    { id: 1, name: 'Laptop', price: 999 },
    { id: 2, name: 'Mouse', price: 29 },
    { id: 3, name: 'Keyboard', price: 100 },
    { id: 4, name: 'Monitor', price: 299 }
  ]
}
Item 1: Laptop - $999
Item 2: Mouse - $29
Item 3: Keyboard - $100
Item 4: Monitor - $299

```

## Comparison

While both files represent similar data, the Protobuf representation will generally result in a significantly smaller file size. This is due to Protobuf's efficient binary encoding compared to JSON's textual representation. The exact size difference will vary depending on the complexity and amount of data.

- json size: 150 byte
- proto buff size: 70 byte


## Conclusion

Protobuf offers a substantial size advantage over JSON, making it a compelling choice for applications where bandwidth or storage efficiency are important considerations. This demonstration highlights the practical difference in the resulting file sizes.
