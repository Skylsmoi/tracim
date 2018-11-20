"""add_is_deleted_to_user

Revision ID: 78b52ca39419
Revises: ad79f58ec2bf
Create Date: 2018-08-09 15:50:49.656925

"""

# revision identifiers, used by Alembic.
revision = '78b52ca39419'
down_revision = 'ad79f58ec2bf'

from alembic import op
import sqlalchemy as sa


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('users', sa.Column('is_deleted', sa.Boolean(), server_default=sa.sql.expression.literal(False), nullable=False))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('users', 'is_deleted')
    # ### end Alembic commands ###