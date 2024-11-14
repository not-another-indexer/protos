// @generated by protobuf-ts 2.9.4
// @generated from protobuf file "nai_auth.proto" (syntax proto3)
// tslint:disable
import { ServiceType } from "@protobuf-ts/runtime-rpc";
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import { WireType } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * @generated from protobuf message RegisterRequest
 */
export interface RegisterRequest {
    /**
     * @generated from protobuf field: string p_username = 1;
     */
    pUsername: string;
    /**
     * @generated from protobuf field: string p_display_name = 2;
     */
    pDisplayName: string;
    /**
     * @generated from protobuf field: string p_raw_password = 3;
     */
    pRawPassword: string;
}
/**
 * @generated from protobuf message Empty
 */
export interface Empty {
}
/**
 * @generated from protobuf message SignInRequest
 */
export interface SignInRequest {
    /**
     * @generated from protobuf field: string p_username = 1;
     */
    pUsername: string;
    /**
     * @generated from protobuf field: string p_raw_password = 2;
     */
    pRawPassword: string;
}
/**
 * @generated from protobuf message SignInResponse
 */
export interface SignInResponse {
    /**
     * @generated from protobuf field: string p_username = 1;
     */
    pUsername: string;
    /**
     * @generated from protobuf field: string p_display_name = 2;
     */
    pDisplayName: string;
    /**
     * @generated from protobuf field: string p_access_token = 3;
     */
    pAccessToken: string;
    /**
     * @generated from protobuf field: string p_refresh_token = 4;
     */
    pRefreshToken: string;
}
/**
 * @generated from protobuf message RefreshTokenRequest
 */
export interface RefreshTokenRequest {
    /**
     * @generated from protobuf field: string p_refresh_token = 1;
     */
    pRefreshToken: string;
}
/**
 * @generated from protobuf message RefreshTokenResponse
 */
export interface RefreshTokenResponse {
    /**
     * @generated from protobuf field: string p_access_token = 1;
     */
    pAccessToken: string;
}
// @generated message type with reflection information, may provide speed optimized methods
class RegisterRequest$Type extends MessageType<RegisterRequest> {
    constructor() {
        super("RegisterRequest", [
            { no: 1, name: "p_username", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "p_display_name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "p_raw_password", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<RegisterRequest>): RegisterRequest {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.pUsername = "";
        message.pDisplayName = "";
        message.pRawPassword = "";
        if (value !== undefined)
            reflectionMergePartial<RegisterRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: RegisterRequest): RegisterRequest {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string p_username */ 1:
                    message.pUsername = reader.string();
                    break;
                case /* string p_display_name */ 2:
                    message.pDisplayName = reader.string();
                    break;
                case /* string p_raw_password */ 3:
                    message.pRawPassword = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: RegisterRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string p_username = 1; */
        if (message.pUsername !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.pUsername);
        /* string p_display_name = 2; */
        if (message.pDisplayName !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.pDisplayName);
        /* string p_raw_password = 3; */
        if (message.pRawPassword !== "")
            writer.tag(3, WireType.LengthDelimited).string(message.pRawPassword);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message RegisterRequest
 */
export const RegisterRequest = new RegisterRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Empty$Type extends MessageType<Empty> {
    constructor() {
        super("Empty", []);
    }
    create(value?: PartialMessage<Empty>): Empty {
        const message = globalThis.Object.create((this.messagePrototype!));
        if (value !== undefined)
            reflectionMergePartial<Empty>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Empty): Empty {
        return target ?? this.create();
    }
    internalBinaryWrite(message: Empty, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message Empty
 */
export const Empty = new Empty$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SignInRequest$Type extends MessageType<SignInRequest> {
    constructor() {
        super("SignInRequest", [
            { no: 1, name: "p_username", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "p_raw_password", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<SignInRequest>): SignInRequest {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.pUsername = "";
        message.pRawPassword = "";
        if (value !== undefined)
            reflectionMergePartial<SignInRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SignInRequest): SignInRequest {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string p_username */ 1:
                    message.pUsername = reader.string();
                    break;
                case /* string p_raw_password */ 2:
                    message.pRawPassword = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: SignInRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string p_username = 1; */
        if (message.pUsername !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.pUsername);
        /* string p_raw_password = 2; */
        if (message.pRawPassword !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.pRawPassword);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message SignInRequest
 */
export const SignInRequest = new SignInRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SignInResponse$Type extends MessageType<SignInResponse> {
    constructor() {
        super("SignInResponse", [
            { no: 1, name: "p_username", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "p_display_name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "p_access_token", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "p_refresh_token", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<SignInResponse>): SignInResponse {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.pUsername = "";
        message.pDisplayName = "";
        message.pAccessToken = "";
        message.pRefreshToken = "";
        if (value !== undefined)
            reflectionMergePartial<SignInResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SignInResponse): SignInResponse {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string p_username */ 1:
                    message.pUsername = reader.string();
                    break;
                case /* string p_display_name */ 2:
                    message.pDisplayName = reader.string();
                    break;
                case /* string p_access_token */ 3:
                    message.pAccessToken = reader.string();
                    break;
                case /* string p_refresh_token */ 4:
                    message.pRefreshToken = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: SignInResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string p_username = 1; */
        if (message.pUsername !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.pUsername);
        /* string p_display_name = 2; */
        if (message.pDisplayName !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.pDisplayName);
        /* string p_access_token = 3; */
        if (message.pAccessToken !== "")
            writer.tag(3, WireType.LengthDelimited).string(message.pAccessToken);
        /* string p_refresh_token = 4; */
        if (message.pRefreshToken !== "")
            writer.tag(4, WireType.LengthDelimited).string(message.pRefreshToken);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message SignInResponse
 */
export const SignInResponse = new SignInResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class RefreshTokenRequest$Type extends MessageType<RefreshTokenRequest> {
    constructor() {
        super("RefreshTokenRequest", [
            { no: 1, name: "p_refresh_token", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<RefreshTokenRequest>): RefreshTokenRequest {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.pRefreshToken = "";
        if (value !== undefined)
            reflectionMergePartial<RefreshTokenRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: RefreshTokenRequest): RefreshTokenRequest {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string p_refresh_token */ 1:
                    message.pRefreshToken = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: RefreshTokenRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string p_refresh_token = 1; */
        if (message.pRefreshToken !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.pRefreshToken);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message RefreshTokenRequest
 */
export const RefreshTokenRequest = new RefreshTokenRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class RefreshTokenResponse$Type extends MessageType<RefreshTokenResponse> {
    constructor() {
        super("RefreshTokenResponse", [
            { no: 1, name: "p_access_token", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<RefreshTokenResponse>): RefreshTokenResponse {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.pAccessToken = "";
        if (value !== undefined)
            reflectionMergePartial<RefreshTokenResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: RefreshTokenResponse): RefreshTokenResponse {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string p_access_token */ 1:
                    message.pAccessToken = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: RefreshTokenResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string p_access_token = 1; */
        if (message.pAccessToken !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.pAccessToken);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message RefreshTokenResponse
 */
export const RefreshTokenResponse = new RefreshTokenResponse$Type();
/**
 * @generated ServiceType for protobuf service AuthService
 */
export const AuthService = new ServiceType("AuthService", [
    { name: "Register", options: {}, I: RegisterRequest, O: Empty },
    { name: "SignIn", options: {}, I: SignInRequest, O: SignInResponse },
    { name: "RefreshToken", options: {}, I: RefreshTokenRequest, O: RefreshTokenResponse }
]);