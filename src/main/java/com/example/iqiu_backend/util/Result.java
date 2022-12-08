package com.example.iqiu_backend.util;

public class Result<T> {
    private Integer code;
    private String message;
    private Boolean success;
    private T data;

    public Result() {
    }

    public Result(String message, T data) {
        this.message = message;
        this.data = data;
    }

    public Result(Integer code, String message, T data) {
        this.code = code;
        this.message = message;
        this.data = data;
    }

    public Result(Integer code, String message) {
        this.code = code;
        this.message = message;
    }

    public Result(Integer code) {
        this.code = code;
    }

    public static <T> Result<T> success(T data) {
        Result<T> result = new Result();
        result.setSuccess(true);
        result.setMessage("操作成功！");
        result.setCode(200);
        result.setData(data);
        return result;
    }

    public static <T> Result<T> success(String message, T data) {
        Result<T> result = new Result();
        result.setSuccess(true);
        result.setData(data);
        result.setCode(200);
        result.setMessage(message);
        return result;
    }

    public static <T> Result<T> success() {
        Result<T> result = new Result();
        result.setMessage("操作成功！");
        result.setSuccess(true);
        result.setCode(200);
        return result;
    }

    public static <T> Result<T> error(String message) {
        Result<T> result = new Result();
        result.setMessage("操作失败！");
        result.setCode(500);
        result.setMessage(message);
        result.setSuccess(false);
        return result;
    }

    public static <T> Result<T> error(Integer code, String message) {
        Result<T> result = new Result();
        result.setMessage("操作失败！");
        result.setCode(code);
        result.setMessage(message);
        result.setSuccess(false);
        return result;
    }

    public static <T> Result<T> error(String message, T data) {
        Result<T> result = new Result();
        result.setCode(500);
        result.setMessage(message);
        result.setSuccess(false);
        result.setData(data);
        return result;
    }

    public static <T> Result<T> validateFailed(String message) {
        Result<T> result = new Result();
        result.setCode(400);
        result.setMessage(message);
        result.setSuccess(false);
        return result;
    }

    public static <T> Result<T> sentinelError() {
        Result<T> result = new Result();
        result.setCode(505);
        result.setMessage("当前服务繁忙，请稍后再试...");
        result.setSuccess(false);
        return result;
    }

    public Integer getCode() {
        return this.code;
    }

    public String getMessage() {
        return this.message;
    }

    public Boolean getSuccess() {
        return this.success;
    }

    public T getData() {
        return this.data;
    }

    public void setCode(final Integer code) {
        this.code = code;
    }

    public void setMessage(final String message) {
        this.message = message;
    }

    public void setSuccess(final Boolean success) {
        this.success = success;
    }

    public void setData(final T data) {
        this.data = data;
    }

    public boolean equals(final Object o) {
        if (o == this) {
            return true;
        } else if (!(o instanceof Result)) {
            return false;
        } else {
            Result<?> other = (Result)o;
            if (!other.canEqual(this)) {
                return false;
            } else {
                label59: {
                    Object this$code = this.getCode();
                    Object other$code = other.getCode();
                    if (this$code == null) {
                        if (other$code == null) {
                            break label59;
                        }
                    } else if (this$code.equals(other$code)) {
                        break label59;
                    }

                    return false;
                }

                Object this$success = this.getSuccess();
                Object other$success = other.getSuccess();
                if (this$success == null) {
                    if (other$success != null) {
                        return false;
                    }
                } else if (!this$success.equals(other$success)) {
                    return false;
                }

                Object this$message = this.getMessage();
                Object other$message = other.getMessage();
                if (this$message == null) {
                    if (other$message != null) {
                        return false;
                    }
                } else if (!this$message.equals(other$message)) {
                    return false;
                }

                Object this$data = this.getData();
                Object other$data = other.getData();
                if (this$data == null) {
                    if (other$data != null) {
                        return false;
                    }
                } else if (!this$data.equals(other$data)) {
                    return false;
                }

                return true;
            }
        }
    }

    protected boolean canEqual(final Object other) {
        return other instanceof Result;
    }

    public int hashCode() {
        boolean PRIME = true;
        int result = 1;
        Object $code = this.getCode();
        result = result * 59 + ($code == null ? 43 : $code.hashCode());
        Object $success = this.getSuccess();
        result = result * 59 + ($success == null ? 43 : $success.hashCode());
        Object $message = this.getMessage();
        result = result * 59 + ($message == null ? 43 : $message.hashCode());
        Object $data = this.getData();
        result = result * 59 + ($data == null ? 43 : $data.hashCode());
        return result;
    }

    public String toString() {
        return "Result(code=" + this.getCode() + ", message=" + this.getMessage() + ", success=" + this.getSuccess() + ", data=" + this.getData() + ")";
    }
}

