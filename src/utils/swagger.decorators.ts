import { applyDecorators } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

export function ApiGetOperation(summary: string) {
  return applyDecorators(
    ApiOperation({ summary }),
    ApiResponse({ status: 200, description: 'Successful response' }),
    ApiResponse({ status: 404, description: 'Not found' }),
  );
}

export function ApiPostOperation(summary: string) {
  return applyDecorators(
    ApiOperation({ summary }),
    ApiResponse({ status: 201, description: 'Created successfully' }),
    ApiResponse({ status: 400, description: 'Bad request' }),
  );
}

export function ApiPutPatchOperation(summary: string) {
  return applyDecorators(
    ApiOperation({ summary }),
    ApiResponse({ status: 200, description: 'Updated successfully' }),
    ApiResponse({ status: 404, description: 'Not found' }),
  );
}

export function ApiDeleteOperation(summary: string) {
  return applyDecorators(
    ApiOperation({ summary }),
    ApiResponse({ status: 200, description: 'Deleted successfully' }),
    ApiResponse({ status: 404, description: 'Not found' }),
  );
}
