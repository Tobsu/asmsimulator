app.service('opcodes', [function() {
    var opcodes = {
        NONE: 0,

        // Word instructions
        MOV_REG_TO_REG: 1,
        MOV_ADDRESS_TO_REG: 2,
        MOV_REGADDRESS_TO_REG: 3,
        MOV_REG_TO_ADDRESS: 4,
        MOV_REG_TO_REGADDRESS: 5,
        MOV_NUMBER_TO_REG: 6,
        MOV_NUMBER_TO_ADDRESS: 7,
        MOV_NUMBER_TO_REGADDRESS: 8,
        ADD_REG_TO_REG: 10,
        ADD_REGADDRESS_TO_REG: 11,
        ADD_ADDRESS_TO_REG: 12,
        ADD_NUMBER_TO_REG: 13,
        SUB_REG_FROM_REG: 14,
        SUB_REGADDRESS_FROM_REG: 15,
        SUB_ADDRESS_FROM_REG: 16,
        SUB_NUMBER_FROM_REG: 17,
        INC_REG: 18,
        DEC_REG: 19,
        CMP_REG_WITH_REG: 20,
        CMP_REGADDRESS_WITH_REG: 21,
        CMP_ADDRESS_WITH_REG: 22,
        CMP_NUMBER_WITH_REG: 23,
        JMP_REGADDRESS: 30,
        JMP_ADDRESS: 31,
        JC_REGADDRESS: 32,
        JC_ADDRESS: 33,
        JNC_REGADDRESS: 34,
        JNC_ADDRESS: 35,
        JZ_REGADDRESS: 36,
        JZ_ADDRESS: 37,
        JNZ_REGADDRESS: 38,
        JNZ_ADDRESS: 39,
        JA_REGADDRESS: 40,
        JA_ADDRESS: 41,
        JNA_REGADDRESS: 42,
        JNA_ADDRESS: 43,
        PUSH_REG: 50,
        PUSH_REGADDRESS: 51,
        PUSH_ADDRESS: 52,
        PUSH_NUMBER: 53,
        POP_REG: 54,
        CALL_REGADDRESS: 55,
        CALL_ADDRESS: 56,
        RET: 57,
        MUL_REG: 60,
        MUL_REGADDRESS: 61,
        MUL_ADDRESS: 62,
        MUL_NUMBER: 63,
        DIV_REG: 64,
        DIV_REGADDRESS: 65,
        DIV_ADDRESS: 66,
        DIV_NUMBER: 67,
        AND_REG_WITH_REG: 70,
        AND_REGADDRESS_WITH_REG: 71,
        AND_ADDRESS_WITH_REG: 72,
        AND_NUMBER_WITH_REG: 73,
        OR_REG_WITH_REG: 74,
        OR_REGADDRESS_WITH_REG: 75,
        OR_ADDRESS_WITH_REG: 76,
        OR_NUMBER_WITH_REG: 77,
        XOR_REG_WITH_REG: 78,
        XOR_REGADDRESS_WITH_REG: 79,
        XOR_ADDRESS_WITH_REG: 80,
        XOR_NUMBER_WITH_REG: 81,
        NOT_REG: 82,
        SHL_REG_WITH_REG: 90,
        SHL_REGADDRESS_WITH_REG: 91,
        SHL_ADDRESS_WITH_REG: 92,
        SHL_NUMBER_WITH_REG: 93,
        SHR_REG_WITH_REG: 94,
        SHR_REGADDRESS_WITH_REG: 95,
        SHR_ADDRESS_WITH_REG: 96,
        SHR_NUMBER_WITH_REG: 97,

        // Byte instructions
        MOV_BYTE_REG_TO_REG: 101,
        MOV_BYTE_ADDRESS_TO_REG: 102,
        MOV_BYTE_REGADDRESS_TO_REG: 103,
        MOV_BYTE_REG_TO_ADDRESS: 104,
        MOV_BYTE_REG_TO_REGADDRESS: 105,
        MOV_BYTE_NUMBER_TO_REG: 106,
        MOV_BYTE_NUMBER_TO_ADDRESS: 107,
        MOV_BYTE_NUMBER_TO_REGADDRESS: 108,
        ADD_BYTE_REG_TO_REG: 110,
        ADD_BYTE_REGADDRESS_TO_REG: 111,
        ADD_BYTE_ADDRESS_TO_REG: 112,
        ADD_BYTE_NUMBER_TO_REG: 113,
        SUB_BYTE_REG_FROM_REG: 114,
        SUB_BYTE_REGADDRESS_FROM_REG: 115,
        SUB_BYTE_ADDRESS_FROM_REG: 116,
        SUB_BYTE_NUMBER_FROM_REG: 117,
        CMP_BYTE_REG_WITH_REG: 120,
        CMP_BYTE_REGADDRESS_WITH_REG: 121,
        CMP_BYTE_ADDRESS_WITH_REG: 122,
        CMP_BYTE_NUMBER_WITH_REG: 123,
	EXCEC_INT_ROUTINE: 124
    };

    return opcodes;
}]);
