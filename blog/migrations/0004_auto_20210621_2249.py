# Generated by Django 3.1.3 on 2021-06-21 16:49

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0003_auto_20210621_2239'),
    ]

    operations = [
        migrations.RenameField(
            model_name='post',
            old_name='содержание',
            new_name='content',
        ),
        migrations.RenameField(
            model_name='post',
            old_name='тема',
            new_name='title',
        ),
    ]
