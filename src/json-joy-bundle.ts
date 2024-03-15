import {
  Model, Timespan, Timestamp, 
  ArrNode, BinNode, ConNode, ObjNode, StrNode, ValNode, VecNode
} from "json-joy/esm/json-crdt"
import { Patch, s, konst } from "json-joy/es2020/json-crdt-patch"

// @ts-ignore allow "window.JSONJoy"
	window.JSONJoy = {
	  Model, Timespan, Timestamp,
	  ArrNode, BinNode, ConNode, ObjNode, StrNode, ValNode, VecNode,
	  Patch, Schema:s, konst
	}
