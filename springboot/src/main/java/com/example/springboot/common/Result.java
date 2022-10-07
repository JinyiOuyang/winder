package com.example.springboot.common;

import lombok.Data;

@Data
public class Result {
    private String code;
    private String msg;
    private Object data;

    private static final String SUCCESS_CODE = "200";
    private static final String ERROR_CODE = "-1";
    private static final String SUCCESS_MSG = "Request Successful";
    private static final String ERROR_MSG = "Request Fail";

    public static Result success() {
        Result result = new Result();
        result.setCode(SUCCESS_CODE);
        result.setMsg(SUCCESS_MSG);
        return result;
    }

    public static Result success(Object data) {
        Result result = success();
        result.setData(data);
        return result;
    }

    public static Result error(String msg) {
        Result result = new Result();
        result.setCode(ERROR_CODE);
        result.setMsg(msg);
        return result;
    }
}
